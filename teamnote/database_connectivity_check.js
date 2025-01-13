import React, { useState, useEffect } from 'react';
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://nitrd122:HVaA7r5eZU62e07n@cluster0.klnnn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

