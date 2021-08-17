# Pumps control
>> Web application to read volume sensors and control pumps

## Scope
### Overview: 
The mixing station will be a two-part system.  The first part will be a control box consisting of a Raspberry PI microcontroller board, a 7+ touch screen, 4 hardwired physical buttons, (4) 24 VDC relays, a wifi usb adapter with antenna, a 5 volt power supply and a 24 volt power supply.  The fore mentioned components will be housed in a metal box with enough physical rigidity and weather tightness to withstand very harsh indoor environments like car repair shops, maintenance shop, etc.

The second enclosure will house from one to four pumps varying in nature to support the application needs at hand.  Typical configuration would be a 3-pump system housing peristaltic pumps, two of which would dispense equal amounts of liquid while the third pump would dispense 2% as much volume as the other two pumps.  This is the typical mixing ratio for Decon 7 the primary product to be dispensed by the system.  

The software to control the system must be able to handle 4 separate GPIO inputs from the switches which shall be 4 different amounts of combined liquids, ie. A 1 ounce button, a 2 ounce button, a pint button, and a quart button.  It is presently assumed that all the pumps being utilized in a dispensing process would run simultaneously.  

In addition to the buttons the system will have 4 GPIO lines running to transistor-controlled relays. These 4 GPIO lines will handle from one to 4 pumps at a time depending on how many liquids are being used in the application. 

The system will also need to monitor the level of the liquids being dispensed to detect an out of liquid condition.  This will be accomplished by 4 window comparators attached to probes in the liquid containers.  The circuit will produce a high signal upon a condition where the liquid in the container has dropped below a predetermined level set by the probes physical position in the container. These 4 lines will also be attached to the GPIO of the raspberry Pi.

The control will be accomplished through 4 independent software timers which will be used to set the time it takes to deliver the desired liquid amount.  The volume of the liquid will be confirmed via 4 independent flow sensors.  Each of the 1 to 4 liquids will be measured by the flow sensors which put out a series of high to low pulses representing the volume of the liquid being dispensed. The amount of pulses will be compared to the calibration standard to indicate a problem with the system, i.e. the lines are getting dirty or a pump is not performing properly.  In the event the amount of pulses exceeds or is less than the calibrated standard by 10% a visual warning such as time to clean the unit will be displayed on the screen.   The 4 switches will have independent time schedules and number of pulses counted assigned to them through the 7” touch screen entered by way of a calibration process.  The system will be preconfigured to dispense 1 oz, 2oz, 1 pint , and 1 quart of combined liquids but will be able to be set for any amount of volume assigned to each switch through the 7” touch screen.  It will also need a look up table to be assigned to each button to determine how much liquid of each of the 4 possible types will be dispensed at a given ratio to equal the total amount of volume designated by the switch.  Additionally, the system must be able to be configured for use with from one to four pumps.  Only two pumps can run at the same time due to the limitation of the power supply amperage.

The system will need to be able to be put into a calibration mode during set up for the total amount of liquid to be dispensed as well as to calibrate each pump for the proper percentages of the total volume dispensed.

The system must also display an out of liquid condition on the 7” touch screen when the window comparators show a high signal.   

A second phase of development will be to utilize a USB wifi adapter to report via the local wifi or the internet several conditions and operating parameters of the system.  The system will be capable of reporting a low liquid condition for alarming an out of liquid condition.  This could also be used to report a need for reordering of the liquid by the user or the supplier.  Additionally, the amount of each liquid being dispensed on a daily basis will be reported again to the user and additionally the supplier. This will give the user or the supplier a report of volume usage at each location etc.

Even though the Raspberry Pi has an on board wifi a usb wifi adapter will be used to allow the antenna to mount on the top of the control enclosure as the enclosure is metal and the Raspberry Pi antenna is mounted directly to the circuit board.

### Consumer experience

1. Dosage pumps to be controlled by pulse count
    - Pulse count for given volume to be timed by system

2. Three button options for quantities 
    - Quantities are to be small medium and large
    - For Phase One client will provide data/ possible to upscale to larger system at a later date

3. Stop Button 
    - Fourth button on home screen will be a Stop button
    - Stop button will stop all pumps

4. Flow Sensors
    - Flow sensors will track actual volume dispensed for calibration

5. Calibration
    - Users can test flow rate periodically in calibration screen to compare to flow meter

## Deliverables:
- Dosage pumps communicate start/stop with RPI	0	0	4	0
- Dosage pumps measure volume from pulse count	0	0	4	0
- User interface as depicted in PRD (GUI2)	16	0	0	0
- Dispenser setup for three volumes	0	0	4	0
- RPI commmuniate with flow meter via pulse count	0	0	4	0
- Calibration screen allows user to change mix volume	6	0	0	0
- Calibration screen allows user to run pump manually to prime	6	0	0	0
- Calibration screen allows each pump to be ran manually for testing volume	6	0	0	0
- RPI communicate with onboard WIFI antenna for server access	0	0	4	0
- Usage reports generated and sent/retrieved from admin panel	0	8	8	0
- Set services/ui to run from boot	0	0	4	0
- Build phisical test environment to emulate inputs and ouputs	0	0	4	0
- Admin experience				
- Can send software updates to RPI	0	0	4	0
- Can view reports of useage from RPI	0	2	2	0
- Can add / remove user accounts	0	4	4	0
- Can track historical data per user	0	4	0	0
- Can search and sort user accounts by using ID#, volume, type	0	4	0	0