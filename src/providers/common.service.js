import axios from "axios";
import apiUrl from './config';
import AsyncStorage from "@react-native-async-storage/async-storage";
import  { localStorage }  from "./localStorageProvider"

export const commonFunction = {


//With and without token Api functions


/*GET methods*/

withTokenGet : async(apiName)=> {
  let token = await localStorage.getItemObject('userToken');
  let reqOptions = {
    method: "get",
    url: `${apiUrl + apiName}`,
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + token
    },
  };
  const response = await axios.request(reqOptions);
  return response.data;
},

withoutTokenGet : async(apiName)=> {
  let reqOptions = {
    method: "GET",
    url: `${apiUrl + apiName}`,
      headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.request(reqOptions);
  return response.data;
},


/*POST methods*/

withTokenPost : async(apiName, data)=> {
  let token = await localStorage.getItemObject('userToken');
  let reqOptions = {
    method: "POST",
    url: `${apiUrl + apiName}`,
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + token
    },
    data: data,
  };
  const response = await axios.request(reqOptions);
  return response.data;
},

withoutTokenPost: async(apiName, data)=>{
  let reqOptions = {
    method: "POST",
    url: `${apiUrl + apiName}`,
      headers: {
      "Content-Type": "application/json"
    },
    data: data,
  };
  const response = await axios.request(reqOptions);
  return response.data;
},

withTokenFormPost:async(apiName, data)=> {
  let token = await localStorage.getItemObject('userToken');
  let reqOptions = {
    method: "POST",
    url: `${apiUrl + apiName}`,
    headers: {
      "Content-Type": "multipart/form-data",
      'Authorization': 'Bearer ' + token
    },
    data: data,
  };
  const response = await axios.request(reqOptions);
  return response.data;
},



/*PUT methods*/

withTokenFormPut : async(apiName, data)=> {
  let token = await localStorage.getItemObject('userToken');
  let reqOptions = {
    method: "PUT",
    url: `${apiUrl + apiName}`,
    headers: {
      "Content-Type": "multipart/form-data",
      'Authorization': 'Bearer ' + token
    },
    data: data,
  };
  const response = await axios.request(reqOptions);
  return response.data;
},

withTokenPut : async(apiName, data)=> {
 let token = await localStorage.getItemObject('userToken');
  let reqOptions = {
    method: "PUT",
    url: `${apiUrl + apiName}`,
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + token
    },
    data: data,
  };
  const response = await axios.request(reqOptions);
  return response.data;
},


/*DELETE methods*/

withTokenDelete : async(apiName, data)=> {
let token = await localStorage.getItemObject('userToken');
  let reqOptions = {
    method: "Delete",
    url: `${apiUrl + apiName}`,
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + token
    },
    data: data,
  };
  const response = await axios.request(reqOptions);
  return response.data;
}
}