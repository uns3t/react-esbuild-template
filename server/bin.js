#!/usr/bin/env node
import { start } from './server.js';

const root = process.argv[2];

start({ live: false, root });
