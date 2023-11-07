import eel
from datetime import date, datetime, timedelta
import os
import os.path
import pickle
import matplotlib as mpl
import matplotlib.pyplot as plt, mpld3
import matplotlib.dates as dates
from matplotlib.markers import MarkerStyle
from matplotlib.lines import Line2D
import numpy as np

# name of folder where the html, css, js, image files are located

exerciseIndex = {}
exerciseIndex.update({'DL': []})
exerciseIndex.update({'Row': []})
exerciseIndex.update({'LPD': []})
exerciseIndex.update({'SCR': []})
exerciseIndex.update({'FP': []})
exerciseIndex.update({'BicepC': []})
exerciseIndex.update({'HammerC': []})
exerciseIndex.update({'Bench': []})
exerciseIndex.update({'OHP': []})
exerciseIndex.update({'InclineBP': []})
exerciseIndex.update({'TricepPD': []})
exerciseIndex.update({'OHTE': []})
exerciseIndex.update({'LateralR': []})
exerciseIndex.update({'Squat': []})
exerciseIndex.update({'RDL': []})
exerciseIndex.update({'LegPress': []})
exerciseIndex.update({'CalfR': []})
exerciseIndex.update({'LegC': []})

# fields
trackerFlag = os.path.exists('tracker.txt')
tracker = open('tracker.txt')
today = date.today().isoformat()

# Get the size of the file in bytes
sizeTracker = os.path.getsize('tracker.txt')

# Check if the size is 0
if trackerFlag:
    if sizeTracker == 0:
        trackerFlag = False

# backend essentially

if trackerFlag:
    # Open the file in binary mode
    with open('tracker.txt', 'rb') as tracker:
        # Load the data from the file using pickle.load()
        exerciseIndex = pickle.load(tracker)
else:
    # Open the file in write mode
    open('tracker.txt', 'w')

print(exerciseIndex)

eel.init('templates')


@eel.expose
def genGraph():
    dias = []
    for i in range(30):
        hoy = datetime.today()
        dias.append((hoy + timedelta(days=i)).date().strftime('%m-%d'))
    fig, ax = plt.subplots(layout="constrained", figsize=(3, 2))
    fig.tight_layout()
    ax.set_xlabel('date')
    ax.set_ylabel('volume')
    ax.set_title('deadlift progression')
    ax.xaxis.set_major_locator(dates.DayLocator(interval=5))
    for label in ax.get_xticklabels(which='major'):
        label.set(rotation=30, horizontalalignment='right')
    dateAx = np.asarray(dias)
    y = np.linspace(6000, 9000, 30)
    (markers, stemlines, baseline) = ax.stem(dateAx, y)
    ax.plot(dateAx, y)
    plt.setp(markers, markersize=3)
    return mpld3.fig_to_html(fig)


@eel.expose
def inputWeight(exercise, weight):
    setRepW8 = [int(i) for i in weight.split() if i.isdigit()]
    #dailyVol = setRepW8[0] * setRepW8[1] * setRepW8[2]
    #setRepW8.append(dailyVol)
    exerciseIndex[exercise].append(setRepW8)

    # Open the file in binary write mode
    with open('tracker.txt', 'wb') as tracker:
        # Write the data to the file using pickle.dump()
        pickle.dump(exerciseIndex, tracker)

    print(exerciseIndex[exercise])
    print("\n")


# 1000 is width of window and 600 is the height
eel.start('index.html', size=(2000, 1000), port=8001, mode="safari")
