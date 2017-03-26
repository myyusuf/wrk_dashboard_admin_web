import { getMenuData } from './app/base/ApplicationData';
import NavigationBar from "./app/base/components/NavigationBar";
import Splitter from "./app/base/components/Splitter";
import Tree from "./app/base/components/Tree";
import Menu from "./app/base/components/Menu";
import Tabs from "./app/base/components/Tabs";
import Button from "./app/base/components/Button";
import WorkspaceView from "./app/WorkspaceView";
import ProjectList from "./app/project/ProjectList";
import ProjectProgressList from "./app/project_progress/ProjectProgressList";
import UserList from "./app/admin_users/UserList";

var splitter = new Splitter();
splitter.render($('#content-inside'));

var data = [
  {
    label: "Proyek",
    expanded: true,
    items: [
      {
        id: 'project_list',
        label: "Daftar Proyek",
        selected: true
      },
      {
        id: 'project_progress_list',
        label: "Progres Proyek"
      }
    ]
  },
  {
    label: "Laporan",
    expanded: true,
    items: [
      {
        id: 'report1',
        label: "Report 1"
      }
    ]
  },
  {
    label: "Settings",
    expanded: true,
    items: [
      {
        id: 'adminusers',
        label: "User"
      }
    ]
  }
];

var tree = new Tree({
  data: data,
  onClick: function(item){

   if(!tabs.selectTabByTitle(item.label)){
    if(item.id == 'project_list'){
      tabs.add(item.id, item.label, projectList);
    }else if(item.id == 'project_progress_list'){
        tabs.add(item.id, item.label, projectProgressList);
    }else if(item.id == 'adminusers'){
      tabs.add(item.id, item.label, userList);
    }
    //  }else if(item.id == 'jadwal_mingguan'){
    //      tabs.add(item.id, item.label, weeklyScheduleList);
    //  }else if(item.id == 'data_nilai'){
    //      tabs.add(item.id, item.label, scoreList);
    //  }else if(item.id == 'data_siswa'){
    //      tabs.add(item.id, item.label, studentList);
    //  }else if(item.id == 'jadwal_rs'){
    //      tabs.add(item.id, item.label, hospitalScheduleView);
    //  }else if(item.id == 'jadwal_ps'){
    //      tabs.add(item.id, item.label, clinicScheduleView);
    //  }else if(item.id == 'cost_unit'){
    //      tabs.add(item.id, item.label, costUnitReport);
    //  }else if(item.id == 'data_rs'){
    //      tabs.add(item.id, item.label, hospitalList);
    //  }
   }

  }
});

var projectList = new ProjectList();
var projectProgressList = new ProjectProgressList();
var userList = new UserList();

var navigationBar = new NavigationBar([{
  title: 'Application',
  content: tree
}, {
  title: 'Settings'
}]);
navigationBar.render($('#left-content'));

// var workspaceView = new WorkspaceView();

var tabs = new Tabs([
  {
    id: 'project_list',
    title: 'Daftar Proyek',
    content: projectList
  }
]);

tabs.render($('#right-content'));
