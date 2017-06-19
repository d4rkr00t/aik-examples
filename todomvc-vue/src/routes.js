import { Router } from 'director/build/director';

export default function routes(app) {
  const router = new Router();

  ['all', 'active', 'completed'].forEach(visibility => {
    router.on(visibility, () => {
      app.visibility = visibility;
    });
  });

  router.configure({
    notfound() {
      window.location.hash = '';
      app.visibility = 'all';
    }
  });

  console.log(1, router);

  router.init();
}
