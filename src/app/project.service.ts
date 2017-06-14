import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) { 
    this.projects = database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
  }

  getProjectById(ProjectId: string) {
    return this.database.object('Projects/' + ProjectId);
  }

  updateProject(localUpdatedProject){
    var ProjectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
    ProjectEntryInFirebase.update({name: localUpdatedProject.name, goal: localUpdatedProject.goal, description: localUpdatedProject.description, raised: localUpdatedProject.raised});
  }  

  deleteProject(localDeletedProject) {
    var ProjectEntryInFirebase = this.getProjectById(localDeletedProject.$key);
    ProjectEntryInFirebase.remove();
  }

}
