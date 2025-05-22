#!/usr/bin/env node
'use strict';
/**
 * Entry point for teq-cms-demo app.
 * Starts the Object Container and launches the web server.
 */
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';
import Container from '@teqfw/di';

// VARS
/* Resolve a path to the root folder. */
const url = new URL(import.meta.url);
const script = fileURLToPath(url);
const root = dirname(script);
const node = join(root, 'node_modules');

// Create a new instance of the container
const container = new Container();

// Get the resolver from the container
const resolver = container.getResolver();
// set up this app namespace
resolver.addNamespaceRoot('Fl32_Cms_Demo_', join(root, 'src'));
// set up the namespaces for the deps
resolver.addNamespaceRoot('Fl32_Cms_', join(node, '@flancer32', 'teq-cms', 'src'));
resolver.addNamespaceRoot('Fl32_Tmpl_', join(node, '@flancer32', 'teq-tmpl', 'src'));
resolver.addNamespaceRoot('Fl32_Web_', join(node, '@flancer32', 'teq-web', 'src'));

// create the application, init and start
/** @type {Fl32_Cms_Demo_Back_App} */
const app = await container.get('Fl32_Cms_Demo_Back_App$');
await app.start();