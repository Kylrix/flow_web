import { Route as rootRoute } from './routes/__root';
import { Route as r1 } from './routes/index';
import { Route as r2 } from './routes/calendar';
import { Route as r3 } from './routes/events';
import { Route as r4 } from './routes/events.$eventId';
import { Route as r5 } from './routes/focus';
import { Route as r6 } from './routes/forms';
import { Route as r7 } from './routes/forms.$formId';
import { Route as r8 } from './routes/settings';
import { Route as r9 } from './routes/tasks';
import { Route as r10 } from './routes/form.$id';

export const routeTree = rootRoute.addChildren([r1, r2, r3, r4, r5, r6, r7, r8, r9, r10]);
