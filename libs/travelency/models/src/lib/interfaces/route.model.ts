import { Router } from 'express';

export interface Route {
  getRoutePath(): string;
  setRoutePath(routePath: string): void;
  getRouter(): Router;
  initializeRoutes(): void;
}
