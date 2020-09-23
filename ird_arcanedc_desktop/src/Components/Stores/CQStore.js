import React, {createContext, useReducer} from 'react';

const initialState = {
    QName : "",
    Respondant_Code_Template : {
        Name :  "" ,
        Explanation : "" ,
        Code_Length : 5 , 
        Fields : [{
            order : 1 ,
            identifier : "",
            type : "",
            constraints : [],
        }] , 
        Sections : [
            {
                Order : 1,
                Section_Name : "",
                Section_Description : "",
                Instruments : [
                    {
                        Instrument_Name : "",
                        Instrument_Description : "",
                        Fields : {
                            Name : "",
                            Type : "",
                            Constraints : "",
                            identifier : "",
                            UnitDescritpion : "",
                            Constraints : [
                                {
                                    "MAX_VALUE" : "",
                                    "MIN_VALUE" : ""
                                },
                            ]
                        }
                    }
                ]
            }
        ]
    },
    Result_Set_Template : [
        {field_ID : "NAME_032", TYPE : "INTEGER"}
    ]  
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'action description':
        const newState = {}
        return newState;
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }