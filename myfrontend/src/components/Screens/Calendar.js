import React ,{useState,useEffect} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import {initializeApp} from 'firebase/app'
import {query,onSnapshot,getFirestore,addDoc,collection}from 'firebase/firestore'
import { firebaseConfig } from '../configFireBase'
const app = initializeApp(firebaseConfig)
const dbfiresbase=getFirestore(app)
const Calendar = () => {
    var __spreadArrays = (this && this.__spreadArrays) || function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };
    var _a = useState([]), data = _a[0], setData = _a[1];
    useEffect(function () {
        //mounts
        var q = query(collection(dbfiresbase, 'non_existent'));
        var unsub = onSnapshot(q, function (snap) {
            var array = snap.docs.map(function (doc) {
                return {
                    id: doc.id,
                    title: doc.get('title'),
                    start: doc.get('start').toDate(),
                    allDay: doc.get('allDay')
                };
            });
            setData(__spreadArrays(array));
        });
        //unmounts
        return function () { unsub()};
    }, []);
    const  handleDateClick = function (e) {
        if (e.jsEvent) {
            var title = prompt('Enter Title');
            var event = {
                title: title ,
                end:null,
                start: e.date,
                allDay: true
            };
            
            title && addDoc(collection(dbfiresbase, 'non_existent'), event);
        }
    };
    return (
        <div className='bg'>
            
       <FullCalendar 
       events={data}
       
       plugins ={[dayGridPlugin,interactionPlugin]}
       
       dateClick={handleDateClick}
       /> 







        </div>
    )
}

export default Calendar
