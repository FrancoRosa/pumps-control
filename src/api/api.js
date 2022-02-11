import axios from "axios";
import io from "socket.io-client";

export const host = `http://${window.location.hostname}:9999`;

export const socket = io.connect(host);

export const startControlledPump = async (pump, controlType) => {
  console.log("... starting controlled pump");
  const { id, pulses, timeout } = pump;
  const url = `${host}/api/startcontrolled`;
  const response = await axios.post(url, { id, pulses, timeout, controlType });
  return response.data;
};

export const startPump = async (pump) => {
  console.log("... starting pump");
  const { id } = pump;
  const url = `${host}/api/start/${id}`;
  const response = await axios.post(url);
  return response.data;
};

export const restartPump = async (pump) => {
  console.log("... restarting pump");
  const { id } = pump;
  const url = `${host}/api/restart/${id}`;
  const response = await axios.post(url);
  return response.data;
};

export const stopPump = async (pump) => {
  console.log("... stop pump");
  const { id } = pump;
  const url = `${host}/api/stop/${id}`;
  const response = await axios.post(url);
  return response.data;
};

export const infoPump = async (id) => {
  console.log("... getting events");
  const url = `${host}/api/info/${id}`;
  const response = await axios.get(url);
  return response.data;
};

export const deviceNetCard = async () => {
  console.log("... getting events");
  const url = `${host}/api/network/card`;
  const response = await axios.get(url);
  return response.data;
};

export const deviceNetScan = async () => {
  console.log("... getting events");
  const url = `${host}/api/network/scan`;
  const response = await axios.get(url);
  return response.data;
};

export const getDeviceId = async () => {
  console.log("... getting device id");
  const url = `${host}/api/id`;
  const response = await axios.get(url);
  return response.data;
};

export const getLastCommit = async () => {
  console.log("... getting device commit");
  const url = `${host}/api/commit`;
  const response = await axios.get(url);
  return response.data;
};

export const updateNetwork = async (ssid, pass) => {
  console.log("... configure wifi");
  const url = `${host}/api/network`;
  const response = await axios.post(url, { ssid, pass });
  return response.data;
};

export const devicePowerOff = async () => {
  console.log("... shutting down");
  const url = `${host}/api/poweroff`;
  const response = await axios.post(url);
  return response.data;
};

export const deviceRestart = async () => {
  console.log("... restarting");
  const url = `${host}/api/restart`;
  const response = await axios.post(url);
  return response.data;
};

export const setApiServer = async () => {
  console.log("... setting server");
  const url = `${host}/api/set_server`;
  const response = await axios.post(url);
  return response.data;
};
