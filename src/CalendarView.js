import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar } from '@mobiscroll/react';
import { myEvents } from './TaskView';
import Navbar from "./components/Navbar"

export const CalendarView = () => {
    const view = React.useMemo(() => {
        return {
            calendar: {
                type: 'month'
            }
        };
    }, []);
    
    const orderMyEvents = React.useCallback((event) => {
        return event.accepted ? 1 : -1;
    }, []);

    return (
            <Eventcalendar
                theme="ios" 
                themeVariant="light"
                clickToCreate={false}
                dragToCreate={false}
                dragToMove={false}
                dragToResize={false}
                view={view}
                data={myEvents}
                eventOrder={orderMyEvents}
        />
    ); 
}