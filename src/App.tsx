import React from 'react';
import './App.css'
import {
        Inject, 
        ScheduleComponent, 
        Day, 
        Week, 
        WorkWeek, 
        Month, 
        Agenda, 
//      ViewsDirective,
//      ViewDirective,
        TimelineViews,
        TimelineMonth,
//        EventSettingsModel,
        DragAndDrop,
        Resize,
        DragEventArgs,
        ResizeEventArgs,
        ScrollOptions,
  //      CellClickEventArgs,
       // Schedule,
      } from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { TreeViewComponent, DragAndDropEventArgs} from '@syncfusion/ej2-react-navigations';

export default class App extends React.Component<{}, {}> {
  //public scheduleObj: ScheduleComponent;
  // private localData : EventSettingsModel = {
    
  //   dataSource : [
  //     {
  //     End : new Date(2021, 0, 11, 6, 30),
  //     Start : new Date(2021, 0, 11, 4, 0),
  //     Summary : 'Testing',
  //     IsAllDay: true,
  //     RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=10'
  //     }
  // ],

  //   fields: 
  //   {
  //     subject : { name : 'Summary',
  //                 default : 'No title is provided.'},
  //     startTime : { name : 'Start' },
  //     endTime : { name : 'End'} 
  //   }
  // };

  private localData = [
    {
      Id : 1,
      subject : 'Meditation Time',
      StartTime : new Date(2021, 4, 8, 6, 0),
      EndTime : new Date(2021, 4, 8, 7, 0),
      Location : 'Yoga Center'
    },
    {
      Id : 2,
      subject : '스케이팅 클래스',
      StartTime : new Date(2021, 4, 8, 6, 0),
      EndTime : new Date(2021, 4, 8, 7, 0),
      Location : 'Tower Park'
    }

];

private onDragStart(args: DragEventArgs): void {
  (args.scroll as ScrollOptions).enable =false;
}

private onResizeStart(args: ResizeEventArgs) : void {
  (args.scroll as ScrollOptions).enable = false;
}


  private remoteData = new DataManager({
    url : 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
    adaptor : new WebApiAdaptor(),
    crossDomain : true
  });


private treeViewData : {[key: string]: Object}[] = [
  {Id:1, Name : 'Perter'},
  {Id:2, Name : 'James'},
  {Id:3, Name : 'David'},
  {Id:4, Name : 'John'},
  {Id:5, Name : 'Steve'},
  
];

public field: Object = 
{ 
  dataSource : this.treeViewData, 
  id : 'Id', 
  text : 'Name'
}

public onTreeDragStop(args: DragAndDropEventArgs): void{
  // let cellData : CellClickEventArgs = this.scheduleObj.getCellDetails(args.target);
  // let eventData : {[key: string] : object} = {
  //   Subject : args.draggedNodeData.text,
  //   StartTime : cellData.startTime,
  //   EndTime : cellData.endTime,
  //   IsAllDay: cellData.isAllDay
  // }
  // this.scheduleObj.addEvent(eventData);
}

public render() {
    return (
  <div>
      <div className = 'scheduler-title-container'>예약자 현황</div>
      <div className = 'scheduler-component'>
      <ScheduleComponent  
                           //ref={schedule => this.scheduleObj = schedule as ScheduleComponent}
                           currentView='Month' 
                           height = '550px' 
                           selectedDate={new Date(2021, 0, 11)} 
                           eventSettings={{dataSource : this.localData}}
                          //  dragStart = {(this.onDragStart.bind(this))}
                          //  resizeStart = {( this.onResizeStart.bind(this))}
                           allowDragAndDrop = {true}
                           allowResizing = {true}
                           >
      {/* <ViewsDirective>
        <ViewDirective option='Day'></ViewDirective>
        <ViewDirective option='Week'></ViewDirective>
        <ViewDirective option='Month'></ViewDirective>
        <ViewDirective option='TimelineDay'></ViewDirective>
        <ViewDirective option='TimelineMonth'></ViewDirective>
      </ViewsDirective> */}
      <Inject services = {[Day, Week, WorkWeek, Month, Agenda, TimelineViews, TimelineMonth , DragAndDrop, Resize]} />
    </ScheduleComponent>
    </div>

       
             <div className = 'treeview-component'>
             <div className = 'treeview-title-container'>환자명</div>
                  <TreeViewComponent fields={this.field} 
                                  allowDragAndDrop = {true}
                     //             nodeDragStop = {this.onTreeDragStop.bind(this)} 
                                  />
            </div>
            
    </div>
    );
}
}


