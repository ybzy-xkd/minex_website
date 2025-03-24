import {ADD_TO_NUMBER} from "@/constants/ActionTypes.ts";



export function addToNumber(payload: number) {

  return {
    type: ADD_TO_NUMBER,
    payload
  }

}
