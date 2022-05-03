AFRAME.registerComponent('distruler', {
  schema: {
    target: { type: 'selector' },
    targetName: { type: 'string' },
    questionId: { type: 'string'}
  },
  multiple: true,
  init() {
    let pause = false;
    let distance = 0;
    let targetName = this.data.targetName
    let questionId = this.data.questionId
    let check;

    const answersCheck = (q=null, a=null) => {
      const correctColor = 'green'
      const incorrectColor = 'red'
      const correctMsg = 'Correct!'
      const incorrectMsg = 'Try again'
      let fontColor = incorrectColor
      let msg = incorrectMsg
      let answerFlag = false

      switch(q) {
        case 'Q1CARBORN':
          fontColor = (a === 'Austin-7') ? correctColor : incorrectColor
          msg = (a === 'Austin-7') ? correctMsg : incorrectMsg
          answerFlag = (a === 'Austin-7') ? true : false
      }
      return {fontColor, msg, answerFlag};
    }

    const showText = () => {
      // Check answer
      let {fontColor, msg, answerFlag} = answersCheck(questionId, targetName)
      // Get exisit text in scene
      let oldTextObj = document.querySelector('#answerText1')
      // Create element to be shown
      let obj = document.createElement('a-text')
      // obj.setAttribute('shadow', '')
      obj.setAttribute('id', 'answerText1')
      obj.setAttribute('value', targetName + ' (' + msg + ')')
      obj.setAttribute('color', fontColor)
      obj.setAttribute('font', 'aileronsemibold')
      obj.setAttribute('scale', '2 2 1')
      obj.setAttribute('position', '-5 1.1 -15')
      let absPos = new THREE.Vector3().copy(
        this.el.object3D.getWorldPosition()
      )
      obj.object3D.position.set(absPos.x, absPos.y + 3, absPos.z)
      // if(!answerFlag) {
      //   obj.setAttribute('dynamic-body', {
      //     shape: 'auto',
      //     mass: 2,
      //     linearDamping: 0.5,
      //     angularDamping: 0.5,
      //   })
      // }
      obj.setAttribute('visible', true)
      if(oldTextObj) {
        this.el.sceneEl.removeChild(oldTextObj)
      }
      this.el.sceneEl.appendChild(obj)
    }
    
    check = setInterval(() => {

      if (pause) return;
      let currentPosition = this.el.object3D.getWorldPosition(new THREE.Vector3());
      let targetPosition = this.data.target.object3D.getWorldPosition(new THREE.Vector3());
      let _distance = currentPosition.distanceTo(targetPosition)

      // do what you want with the distance:
      if (_distance != distance) {
        console.log("current to " + this.data.targetName + " dist:" + _distance);
        if(_distance < 4.0) {
          showText();
        }
      }

      distance = _distance
    }, 2000);
  },
  update(oldData) { },
  remove() {
    pause = true;
  }
});

// AFRAME.registerComponent('detectMakrers', {
//   init() {
//     const imageFound = (e) => {
//       console.log("Markerfound!" + e)
//     }
//     this.el.sceneEl.addEventListener('markerFound', imageFound)
//   }
// })