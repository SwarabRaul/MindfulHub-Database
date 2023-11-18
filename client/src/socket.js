import { io } from 'socket.io-client';

const URL = 'https://mindfulhub-database.onrender.com';

export const socket = io(URL, {
    autoConnect: false,
    timeout: 60000
});