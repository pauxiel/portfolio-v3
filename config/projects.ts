import { Maybe, Tuple } from '../types';
import { Stack } from './stack';

export type Deployment = {
  web?: string;
  android?: string;
  ios?: string;
  code?: string;
};

export interface SubProject {
  title: string;
  description: string;
  repository: Maybe<string>;
  deployment: Deployment;
}

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Project {
  title: string;
  slug: string;
  website: string;
  banner: string;
  description: string;
  shortDescription?: string;
  repository: Maybe<string>;
  stack: Stack[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots: string[];
  deployment: Deployment;
  subProjects: SubProject[];
}

export const projects: Project[] = [
  {
    title: 'Circcle',
    slug: 'circcle',
    website: 'https://circle-one.vercel.app',
    banner: '/static/projects/velvet-live/circleloginpage.PNG',
    description:
      'Meet Circcle: Every industry home for managing and bonding with their audience through communities. Circcle is an easy to use web application built for every industry to help build a community with stronger bond and faster communication between their users or audience. This awesome project was developed by my friend Harry Udechukwu and I, Harry is an innovative product designer and frontend developer who worked effortlessly to make this project come to live with a good user interface. while i responsibele for the application logic, setting up database and connecting it to the app, implementation of features such as authentication, community creation e.t.c',
    repository: 'https://github.com/karanpratapsingh/Proximity',
    stack: [Stack.typescript, Stack.reactnative, Stack.postgres],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/image-uploader-87c5d.appspot.com/o/images%2FScreenshot_20220910-215424_Chrome.jpg7d8c5013-9201-4a75-86d0-f3070b503663?alt=media&token=0b482bcf-58a9-479d-94b8-79603dec410b',
      'https://firebasestorage.googleapis.com/v0/b/image-uploader-87c5d.appspot.com/o/images%2FScreenshot_20220910-215448_Chrome.jpg8759c021-173b-4547-bdf1-d9fb4f83c10a?alt=media&token=ca36be6a-f83a-4908-b48e-e776eb7a6a94',
    ],
    deployment: {
      web: 'https://circle-one.vercel.app',
    },
    subProjects: [],
  },
  {
    title: 'Image Uploader',
    slug: 'image-uploader',
    banner: '/static/projects/velvet-live/imageuploader.PNG',
    website: 'https://imguploader.netlify.app',
    description: `Meet imageuploader, an app for uploading image and copy uploaded image link. I  built this app alone. It was a challenge on devchallenge. The app is completed with all features working. The features include the uploading features, drag and drop feature, loading feature and the feature that allows you copy link after image is uploaded. The app was completed on 22nd of june, 2022`,
    repository: 'https://github.com/pauxiel/Image-uploader',
    stack: [Stack.javascript, Stack.react, Stack.redis],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/image-uploader-87c5d.appspot.com/o/images%2FScreenshot_20220909-221316_Chrome.jpgd08bed76-462d-418e-91f5-3718f0e2449d?alt=media&token=848ee878-cf63-4673-aa4a-2159aa398e70',
      'https://firebasestorage.googleapis.com/v0/b/image-uploader-87c5d.appspot.com/o/images%2FScreenshot_20220909-221359_Chrome.jpg9989988e-1538-465e-93d1-c4d087f34aeb?alt=media&token=191a1b51-dcdd-4623-a16e-a65b6356ad0f',
      'https://firebasestorage.googleapis.com/v0/b/image-uploader-87c5d.appspot.com/o/images%2FScreenshot_20220909-221400_Chrome.jpgaaffc163-d99c-4ebc-a1a7-a01f49a2ece4?alt=media&token=056e3bda-f7d6-4483-a919-c3345f8c5e39',
    ],
    deployment: {
      web: 'https://imguploader.netlify.app',
    },
    subProjects: [],
  },
];
