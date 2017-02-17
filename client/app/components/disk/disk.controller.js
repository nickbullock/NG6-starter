class DiskController {
  constructor($log, diskModelFactory, $state, $stateParams) {

    const self = this;

    self.path = $stateParams.path;

    diskModelFactory.get({path: self.path}).$promise
      .then(function(data){
        self.prevState = data.path.replace(data.name, '');
        self.disk = data._embedded.items;
      })
      .catch(function(e){
        $log.error(e);
      });

    self.convertBytes = function (bytes){
      var units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        n = parseInt(bytes, 10) || 0,
        l = 0;
      while(n >= 1024){
        n = n/1024;
        l++;
      }
      return(n.toFixed(n >= 10 || l < 1 ? 0 : 1) + ' ' + units[l]);
    };

    self.open = function(item){
      if(item.type === "dir"){
        $state.go(".", {path: item.path});
      }
    };
  }
}

DiskController.$inject = ["$log", "diskModelFactory", "$state", "$stateParams"];

export default DiskController;
