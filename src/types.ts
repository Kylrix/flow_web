import type {
  Calendars,
  Collaborators,
  EventGuests,
  Events,
  FocusSessions,
  Tasks,
} from './generated/appwrite/types';

export type TaskStatus = 'todo' | 'in_progress' | 'done' | 'blocked' | 'archived' | string;
export type Priority = 'low' | 'medium' | 'high' | 'urgent' | string;
export type ViewMode = 'list' | 'board' | 'calendar' | 'focus' | string;
export type TaskSort = 'createdAt' | 'updatedAt' | 'dueDate' | 'priority' | string;
export type TaskFilter = string;
export type CollaboratorPermission = 'read' | 'write' | 'admin';

export type Label = {
  id: string;
  name: string;
  color: string;
};

export type Project = {
  id: string;
  name: string;
  color: string;
};

export type Subtask = {
  id: string;
  title: string;
  completed: boolean;
};

export type Comment = {
  id: string;
  content: string;
  authorId: string;
  authorName: string;
  createdAt: Date;
  updatedAt?: Date;
  parentId?: string | null;
};

export type TaskCollaborator = {
  id: string;
  taskId: string;
  userId: string;
  permission: CollaboratorPermission;
  invitedAt: Date | null;
  accepted: boolean | null;
};

export type Task = {
  id: string;
  title: string;
  description?: string | null;
  status: TaskStatus;
  priority: Priority;
  projectId: string;
  labels: string[];
  linkedNotes: string[];
  subtasks: Subtask[];
  comments: Comment[];
  attachments: any[];
  reminders: any[];
  timeEntries: any[];
  assigneeIds: string[];
  creatorId: string;
  parentTaskId: string | null;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  position: number;
  isArchived: boolean;
};

export type Calendar = Calendars;
export type Event = Events & {
  coverImage?: string | null;
  visibility?: string;
  meetingUrl?: string | null;
  url?: string | null;
};
export type EventGuest = EventGuests;
export type FocusSession = FocusSessions;
export type AppwriteTask = Tasks;
export type AppwriteCalendar = Calendars;
export type AppwriteEvent = Events;
export type AppwriteEventGuest = EventGuests;
export type AppwriteFocusSession = FocusSessions;
export type AppwriteCollaborator = Collaborators;
