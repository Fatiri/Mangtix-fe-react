const initialState= {
    event:[],
    eventForm:{}
}
export default function eventReducer(state=initialState, action){
    console.log('event-reducer', state, action)

}
