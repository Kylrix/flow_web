import { Route as rootRoute } from './__root';
import { Route as r1 } from './index';
import { Route as r2 } from './flow-calendar';
import { Route as r3 } from './flow-events';
import { Route as r4 } from './flow-event-id';
import { Route as r5 } from './flow-focus';
import { Route as r6 } from './flow-forms';
import { Route as r7 } from './flow-form-id';
import { Route as r8 } from './flow-settings';
import { Route as r9 } from './flow-tasks';
import { Route as r10 } from './flow-public-form';

export const routeTree = rootRoute.addChildren([r1, r2, r3, r4, r5, r6, r7, r8, r9, r10]);
