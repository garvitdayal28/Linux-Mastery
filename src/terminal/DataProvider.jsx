import { createMachine, assign} from 'xstate';
import {createActorContext} from '@xstate/react';

export const DataMachine = createMachine({
    id:"DataMachine",
    context: {
        //WebSocket
        webSocket:null,
        readyState:0,

        //Terminal
        rows:0,
        column:0,
        terminal:null,

    },
    initial:'listening',
    states:{
        listening:{}
    },
    on:{
        SET:{
            actions: assign((a)=>{
                return a.event.obj
            })
        }
    }
})

export const DataContext = createActorContext(DataMachine)