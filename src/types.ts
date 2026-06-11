/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  number: string;
  title: string;
  role: string;
  description: string;
  image: string;
  year: string;
  duration: string;
  genre: string;
  youtubeUrl?: string;
}

export interface Service {
  id: string;
  num: string;
  title: string;
  description: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  projectType: string;
  message: string;
  createdAt: string;
}
