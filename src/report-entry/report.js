import('./module-a').then(({ default: a }) => {
  // eslint-disable-next-line
    console.log('report', a);
});
