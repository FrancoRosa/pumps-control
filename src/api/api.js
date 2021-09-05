import axios from 'axios';
import io from "socket.io-client";

const host='localhost'
// const host='raspberrypi.local'


export const socket = io.connect(`http://${host}:9999`);

export const startControlledPump = async (pump) => {
  console.log('... starting controlled pump');
  const {id, pulses, timeout} = pump
  const url = `http://${host}:9999/api/startcontrolled`;
  const response = await axios.post(url, {id, pulses, timeout})
  return response.data
}

export const startPump = async (pump) => {
  console.log('... starting pump');
  const {id} = pump
  const url = `http://${host}:9999/api/start/${id}`;
  const response = await axios.post(url)
  return response.data
}

export const stopPump = async (pump) => {
  console.log('... stop pump');
  const {id} = pump
  const url = `http://${host}:9999/api/stop/${id}`;
  const response = await axios.post(url)
  return response.data
}

export const infoPump = async (id) => {
  console.log('... getting events');
  const url = `http://${host}:9999/api/info/${id}`;
  const response = await axios.get(url)
  return response.data
}

export const deviceNetCard = async () => {
  console.log('... getting events');
  const url = `http://${host}:9999/api/network/card`;
  const response = await axios.get(url)
  return response.data
}

export const deviceNetScan = async () => {
  console.log('... getting events');
  const url = `http://${host}:9999/api/network/scan`;
  const response = await axios.get(url)
  return response.data
}

export const getDeviceId = async () => {
  console.log('... getting device id');
  const url = `http://${host}:9999/api/id`;
  const response = await axios.get(url)
  return response.data
}

export const updateNetwork = async (ssid, pass) => {
  console.log('... configure wifi');
  const url = `http://${host}:9999/api/network`;
  const response = await axios.post(url,{ssid, pass})
  return response.data
}

export const devicePowerOff = async () => {
  console.log('... shutting down');
  const url = `http://${host}:9999/api/poweroff`;
  const response = await axios.post(url)
  return response.data
}

export const deviceRestart = async () => {
  console.log('... restarting');
  const url = `http://${host}:9999/api/restart`;
  const response = await axios.post(url)
  return response.data
}