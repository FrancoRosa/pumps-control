from subprocess import check_output
from os import chdir

PROJECT_DIR = '/home/pi/pumps-control'
print(chdir(PROJECT_DIR))
print(check_output('pwd'))
new_data = check_output(['git', 'fetch'])
if new_data:
    check_output(['git', 'pull', 'origin', 'master'])
