/* eslint-disable max-len */
'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('workouts', [
      {
        workoutName: 'One Arm Row',
        description: 'While having one Dumbbell in one hand, place the opposite leg and knell , then extend arm out and hold out and keep your back straight. Lower dumbbell to side and row it as if starting lawnmower, keep elbows tucked in.',
      }, {
        workoutName: 'Shrugs',
        description: 'Hold two dumbbells to each side of the body and while squeezing your back, use shoulders to',
      }, {
        workoutName: 'Bent Over Row',
        description: 'Hold barbell in front of you and slowly bring barbell down and keep your body to a 30-45 degree angle from standing, row barbell towards body while squeezing back and keeping your core tight.',
      }, {
        workoutName: 'Deadlift',
        description: 'Place barbell on the ground, stand with feet shoulder-width apart, grab bar with your hands just outside your legs, Lift bar by driving your hips forwards, keeping a flat back. Lower bar under control',
      }, {
        workoutName: 'Seated Pulldown',
        description: 'Using a cable machine that is seated, grab bar from above head and bring back to a 30 degree angle from machine and bring bar to chest while squeezing back while pulling, being back bar back under control.',
      }, {
        workoutName: 'Row',
        description: 'Using a cable row machine, grab V shape handel and while keeping your back straight row cable into your stomach while squeezing back and have a tight core to keep back straight.',
      }, {
        workoutName: 'Dumbbell Chest Fly',
        description: 'Place bench at a 45 degree angle, lower the weights in an arc out to the sides as far as comfortable, Using your pec muscles to bring dumbbell in front of your chest, slowly return to starting position.'
      }, {
        workoutName: 'Bench Press',
        description: 'Lay down on bench and place hand where your forearms are perpendicular to the ground, and keeping your foot flat on the floor and push using the heels of your foot, while pushing squeeze glutes and keep abs tight to keep your back arch a little to engage with your chest. Bring barbell to the middle of your chest while and keeping elbows at a 45 degree angle, using an explosive push to bring barbell to starting position.'
      }, {
        workoutName: 'Incline Barbell Bench',
        description: 'Using the same techniques as the bench press but having seat 30-40 degree angle',
      }, {
        workoutName: 'Squat',
        description: 'Keep legs a little wider than shoulder-width apart, roll shoulder back and down away from ears, extend arms out straight parallel to the floor and grab bar, place barbell on your back ,NOT YOUR SHOULDERS, and unrack bar, begin by inhaling and unlocking your hips brining them back slightly, while your glutes start to stick out make sure chest and shoulders stay upright and back stays straight. Goal is to bring glutes as low as you can comfortably go. Engage core and push through the heels of your feet until you get to starting position',
      }, {
        workoutName: 'Standing Calf Raise',
        description: 'Set barbell into a squat position, using a slightly elevated surface (Using weighted plates will work), place the top of your foot onto the weight and raise your heels slowly keeping knees extended but not locked. Pause for one second when your standing as much on the tips of your toe as your can, slowly bring heels back to starting position. ',
      }, {
        workoutName: 'Leg Curls',
        description: 'Using a leg curl machine, curl machine towards body slowly, pause at the bottom and bring back to starting position slowly.',
      }, {
        workoutName: 'Close Grip',
        description: 'Get in the same set up as a regular bench press, only difference is the placement of your hands, you want to extend your arms out and grab the bar with both hands very close to the center of the bar. You should feel your tricep doing most of the work rather than your chest'
      }, {
        workoutName: 'Rope pull downs',
        description: 'At the cable machine, place the duel rope at the highest point available, after brace your abs and tuck your elbows in at your side, push down until your arms extend out.',
      }, {
        workoutName: 'Dips',
        description: 'At the dip rack, prop yourself up and keep torso perpendicular to ground, cross your knees and lower your body until your shoulders joints are below your knees, keep in mind to maintain your form through the workout, push back to starting position.',
      }, {
        workoutName: 'Barbell Curl',
        description: 'Grab a barbell (if it`s available to you, use an ez-barbell to take more pressure off your wrist.',
      }, {
        workoutName: 'Dumbbell Hammer Curl',
        description: 'Stand with your feet feet hip width apart. Hold dumbbell at each side. Curl dumbbell straight up, without twisting the dumbbell. Take a pause at the end of the curl and bring down in control motion.',
      }, {
        workoutName: 'Cable Curl',
        description: 'Go to the cable machine and place it to the lowest position available. Grab the bar attachment and use that or ropes if you want to feel a bigger burn. Grab bar with your arms extended and hands shoulder-width apart, palms facing away from you. Keep elbows tucked in and keep abs tight as you curl it towards your shoulders. Pause at then end and bring it back in a control motion.',
      }, {
        workoutName: 'Lateral Raise',
        description: 'Place dumbbells to the side of you and bring arms up to a 90 degree angle, pause at the top and bring down in a control motion.',
      }, {
        workoutName: 'Overhead Press',
        description: 'Stand with your feet shoulder width apart, Lift a barbell to shoulder level and perform an overhead shoulder press by raising the barbell over your head. Hold the weight at the top and before bringing it down in control motion.',
      }])

    await queryInterface.bulkInsert('equipments', [{
      equipmentName: 'Dumbbell',
      workOutId: 1,
    }, {
      equipmentName: 'Dumbbell',
      workOutId: 2,
    }, {
      equipmentName: 'Dumbbell',
      workOutId: 7,
    }, {
      equipmentName: 'Dumbbell',
      workOutId: 17,
    }, {
      equipmentName: 'Dumbbell',
      workOutId: 19,
    }, {
      equipmentName: 'Barbell',
      workOutId: 3,
    }, {
      equipmentName: 'Barbell',
      workOutId: 4,
    }, {
      equipmentName: 'Barbell',
      workOutId: 8,
    }, {
      equipmentName: 'Barbell',
      workOutId: 9,
    }, {
      equipmentName: 'Barbell',
      workOutId: 10,
    }, {
      equipmentName: 'Barbell',
      workOutId: 11,
    }, {
      equipmentName: 'Barbell',
      workOutId: 13,
    }, {
      equipmentName: 'Barbell',
      workOutId: 16,
    }, {
      equipmentName: 'Barbell',
      workOutId: 20,
    }, {
      equipmentName: 'Cable',
      workOutId: 5,
    }, {
      equipmentName: 'Cable',
      workOutId: 6,
    }, {
      equipmentName: 'Cable',
      workOutId: 14,
    }, {
      equipmentName: 'Cable',
      workOutId: 18,
    }, {
      equipmentName: 'Machine',
      workOutId: 12
    }])

    return queryInterface.bulkInsert('bodyParts', [{
      body: 'Back',
      workOutId: 1,
    }, {
      body: 'Back',
      workOutId: 2,
    }, {
      body: 'Back',
      workOutId: 3,
    }, {
      body: 'Back',
      workOutId: 4,
    }, {
      body: 'Back',
      workOutId: 4,
    }, {
      body: 'Back',
      workOutId: 5,
    }, {
      body: 'Back',
      workOutId: 6,
    }, {
      body: 'Chest',
      workOutId: 7,
    }, {
      body: 'Chest',
      workOutId: 8,
    }, {
      body: 'Chest',
      workOutId: 9,
    }, {
      body: 'Legs',
      workOutId: 10,
    }, {
      body: 'Legs',
      workOutId: 11,
    }, {
      body: 'Legs',
      workOutId: 12,
    }, {
      body: 'Tricep',
      workOutId: 8,
    }, {
      body: 'Tricep',
      workOutId: 9,
    }, {
      body: 'Tricep',
      workOutId: 13,
    }, {
      body: 'Tricep',
      workOutId: 14,
    }, {
      body: 'Tricep',
      workOutId: 15,
    }, {
      body: 'Bicep',
      workOutId: 1,
    }, {
      body: 'Bicep',
      workOutId: 3,
    }, {
      body: 'Bicep',
      workOutId: 4,
    }, {
      body: 'Bicep',
      workOutId: 5,
    }, {
      body: 'Bicep',
      workOutId: 6,
    }, {
      body: 'Bicep',
      workOutId: 16,
    }, {
      body: 'Bicep',
      workOutId: 18,
    }, {
      body: 'Bicep',
      workOutId: 18,
    }, {
      body: 'Shoulders',
      workOutId: 2,
    }, {
      body: 'Shoulders',
      workOutId: 15,
    }, {
      body: 'Shoulders',
      workOutId: 19,
    }, {
      body: 'Shoulders',
      workOutId: 20
    }
    ])
  },


  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('workouts')
    await queryInterface.bulkDelete('equipment')

    return queryInterface.bulkDelete('bodyParts')
  }
}
