new Vue({
  el: '#exercise',
  data: {
    alternate: {
      highlight: false,
      shrink: true,
    },
    class1: 'pink',
    class2: 'blue',
    isVisible: true,
    color: 'yellow',
    myStyle: {
      backgroundColor: 'yellow',
      width: '50px',
      height: '20px',
    },
    progressBar: {
      width: '0px',
      backgroundColor: 'red'
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setTimeout(function () {
        vm.alternate.highlight = !vm.alternate.highlight
        vm.alternate.shrink = !vm.alternate.shrink
      }, 1000)
    },
    startProgress: function () {
      var vm = this;
      var width = 0;
      setInterval(function () {
        width = width + 10;
        if (width < 200)
        vm.progressBar.width = width + 'px'
      }, 500)
    }
  }
});
