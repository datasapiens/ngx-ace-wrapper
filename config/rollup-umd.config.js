import resolve from 'rollup-plugin-node-resolve';

import sourcemaps from 'rollup-plugin-sourcemaps';

const pkg = require('../package.json');

const name = pkg.name.replace(/-([a-z])/g, (g) => {
  return g[1].toUpperCase();
});

const globals = {
  '@angular/animations': 'ng.animations',
  '@angular/common': 'ng.common',
  '@angular/core': 'ng.core',
  '@angular/forms': 'ng.forms',
  '@angular/http': 'ng.http',
  '@angular/router': 'ng.router',

  '@angular/platform-browser': 'ng.platformBrowser',
  '@angular/platform-server': 'ng.platformServer',

  'rxjs/AsyncSubject': 'Rx',
  'rxjs/BehaviorSubject': 'Rx',
  'rxjs/Observable': 'Rx',
  'rxjs/Observer': 'Rx',
  'rxjs/ReplaySubject': 'Rx',
  'rxjs/Scheduler': 'Rx',
  'rxjs/Subject': 'Rx',
  'rxjs/Subscriber': 'Rx',
  'rxjs/Subscription': 'Rx',

  'rxjs/operators': 'Rx.Observable.prototype',

  'rxjs/observable/bindCallback': 'Rx.Observable',
  'rxjs/observable/combineLatest': 'Rx.Observable',
  'rxjs/observable/concat': 'Rx.Observable',
  'rxjs/observable/defer': 'Rx.Observable',
  'rxjs/observable/empty': 'Rx.Observable',
  'rxjs/observable/forkJoin': 'Rx.Observable',
  'rxjs/observable/from': 'Rx.Observable',
  'rxjs/observable/fromEvent': 'Rx.Observable',
  'rxjs/observable/fromEventPattern': 'Rx.Observable',
  'rxjs/observable/fromPromise': 'Rx.Observable',
  'rxjs/observable/generate': 'Rx.Observable',
  'rxjs/observable/if': 'Rx.Observable',
  'rxjs/observable/interval': 'Rx.Observable',
  'rxjs/observable/merge': 'Rx.Observable',
  'rxjs/observable/never': 'Rx.Observable',
  'rxjs/observable/of': 'Rx.Observable',
  'rxjs/observable/onErrorResumeNext': 'Rx.Observable',
  'rxjs/observable/pairs': 'Rx.Observable',
  'rxjs/observable/race': 'Rx.Observable',
  'rxjs/observable/range': 'Rx.Observable',
  'rxjs/observable/throw': 'Rx.Observable',
  'rxjs/observable/timer': 'Rx.Observable',
  'rxjs/observable/using': 'Rx.Observable',
  'rxjs/observable/zip': 'Rx.Observable',

  'rxjs/operator/audit': 'Rx.Observable.prototype',
  'rxjs/operator/auditTime': 'Rx.Observable.prototype',
  'rxjs/operator/buffer': 'Rx.Observable.prototype',
  'rxjs/operator/bufferCount': 'Rx.Observable.prototype',
  'rxjs/operator/bufferTime': 'Rx.Observable.prototype',
  'rxjs/operator/bufferToggle': 'Rx.Observable.prototype',
  'rxjs/operator/bufferWhen': 'Rx.Observable.prototype',
  'rxjs/operator/catch': 'Rx.Observable.prototype',
  'rxjs/operator/combineAll': 'Rx.Observable.prototype',
  'rxjs/operator/combineLatest': 'Rx.Observable.prototype',
  'rxjs/operator/concat': 'Rx.Observable.prototype',
  'rxjs/operator/concatAll': 'Rx.Observable.prototype',
  'rxjs/operator/concatMap': 'Rx.Observable.prototype',
  'rxjs/operator/concatMapTo': 'Rx.Observable.prototype',
  'rxjs/operator/count': 'Rx.Observable.prototype',
  'rxjs/operator/debounce': 'Rx.Observable.prototype',
  'rxjs/operator/debounceTime': 'Rx.Observable.prototype',
  'rxjs/operator/defaultIfEmpty': 'Rx.Observable.prototype',
  'rxjs/operator/delay': 'Rx.Observable.prototype',
  'rxjs/operator/delayWhen': 'Rx.Observable.prototype',
  'rxjs/operator/dematerialize': 'Rx.Observable.prototype',
  'rxjs/operator/distinct': 'Rx.Observable.prototype',
  'rxjs/operator/distinctUntilChanged': 'Rx.Observable.prototype',
  'rxjs/operator/distinctUntilKeyChanged': 'Rx.Observable.prototype',
  'rxjs/operator/do': 'Rx.Observable.prototype',
  'rxjs/operator/elementAt': 'Rx.Observable.prototype',
  'rxjs/operator/every': 'Rx.Observable.prototype',
  'rxjs/operator/exhaust': 'Rx.Observable.prototype',
  'rxjs/operator/exhaustMap': 'Rx.Observable.prototype',
  'rxjs/operator/expand': 'Rx.Observable.prototype',
  'rxjs/operator/filter': 'Rx.Observable.prototype',
  'rxjs/operator/finally': 'Rx.Observable.prototype',
  'rxjs/operator/find': 'Rx.Observable.prototype',
  'rxjs/operator/findIndex': 'Rx.Observable.prototype',
  'rxjs/operator/first': 'Rx.Observable.prototype',
  'rxjs/operator/groupBy': 'Rx.Observable.prototype',
  'rxjs/operator/ignoreElements': 'Rx.Observable.prototype',
  'rxjs/operator/isEmpty': 'Rx.Observable.prototype',
  'rxjs/operator/last': 'Rx.Observable.prototype',
  'rxjs/operator/let': 'Rx.Observable.prototype',
  'rxjs/operator/map': 'Rx.Observable.prototype',
  'rxjs/operator/mapTo': 'Rx.Observable.prototype',
  'rxjs/operator/materialize': 'Rx.Observable.prototype',
  'rxjs/operator/max': 'Rx.Observable.prototype',
  'rxjs/operator/merge': 'Rx.Observable.prototype',
  'rxjs/operator/mergeAll': 'Rx.Observable.prototype',
  'rxjs/operator/mergeMap': 'Rx.Observable.prototype',
  'rxjs/operator/mergeMapTo': 'Rx.Observable.prototype',
  'rxjs/operator/mergeScan': 'Rx.Observable.prototype',
  'rxjs/operator/min': 'Rx.Observable.prototype',
  'rxjs/operator/multicast': 'Rx.Observable.prototype',
  'rxjs/operator/observeOn': 'Rx.Observable.prototype',
  'rxjs/operator/onErrorResumeNext': 'Rx.Observable.prototype',
  'rxjs/operator/pairwise': 'Rx.Observable.prototype',
  'rxjs/operator/partition': 'Rx.Observable.prototype',
  'rxjs/operator/pluck': 'Rx.Observable.prototype',
  'rxjs/operator/publish': 'Rx.Observable.prototype',
  'rxjs/operator/publishBehavior': 'Rx.Observable.prototype',
  'rxjs/operator/publishLast': 'Rx.Observable.prototype',
  'rxjs/operator/publishReplay': 'Rx.Observable.prototype',
  'rxjs/operator/race': 'Rx.Observable.prototype',
  'rxjs/operator/reduce': 'Rx.Observable.prototype',
  'rxjs/operator/repeat': 'Rx.Observable.prototype',
  'rxjs/operator/repeatWhen': 'Rx.Observable.prototype',
  'rxjs/operator/retry': 'Rx.Observable.prototype',
  'rxjs/operator/retryWhen': 'Rx.Observable.prototype',
  'rxjs/operator/sample': 'Rx.Observable.prototype',
  'rxjs/operator/sampleTime': 'Rx.Observable.prototype',
  'rxjs/operator/scan': 'Rx.Observable.prototype',
  'rxjs/operator/sequenceEqual': 'Rx.Observable.prototype',
  'rxjs/operator/share': 'Rx.Observable.prototype',
  'rxjs/operator/shareReplay': 'Rx.Observable.prototype',
  'rxjs/operator/single': 'Rx.Observable.prototype',
  'rxjs/operator/skip': 'Rx.Observable.prototype',
  'rxjs/operator/skipLast': 'Rx.Observable.prototype',
  'rxjs/operator/skipUntil': 'Rx.Observable.prototype',
  'rxjs/operator/skipWhile': 'Rx.Observable.prototype',
  'rxjs/operator/startWith': 'Rx.Observable.prototype',
  'rxjs/operator/subscribeOn': 'Rx.Observable.prototype',
  'rxjs/operator/switch': 'Rx.Observable.prototype',
  'rxjs/operator/switchMap': 'Rx.Observable.prototype',
  'rxjs/operator/switchMapTo': 'Rx.Observable.prototype',
  'rxjs/operator/take': 'Rx.Observable.prototype',
  'rxjs/operator/takeLast': 'Rx.Observable.prototype',
  'rxjs/operator/takeUntil': 'Rx.Observable.prototype',
  'rxjs/operator/takeWhile': 'Rx.Observable.prototype',
  'rxjs/operator/throttle': 'Rx.Observable.prototype',
  'rxjs/operator/throttleTime': 'Rx.Observable.prototype',
  'rxjs/operator/timeInterval': 'Rx.Observable.prototype',
  'rxjs/operator/timeout': 'Rx.Observable.prototype',
  'rxjs/operator/timeoutWith': 'Rx.Observable.prototype',
  'rxjs/operator/timestamp': 'Rx.Observable.prototype',
  'rxjs/operator/toArray': 'Rx.Observable.prototype',
  'rxjs/operator/toPromise': 'Rx.Observable.prototype',
  'rxjs/operator/window': 'Rx.Observable.prototype',
  'rxjs/operator/windowCount': 'Rx.Observable.prototype',
  'rxjs/operator/windowTime': 'Rx.Observable.prototype',
  'rxjs/operator/windowToggle': 'Rx.Observable.prototype',
  'rxjs/operator/windowWhen': 'Rx.Observable.prototype',
  'rxjs/operator/withLatestFrom': 'Rx.Observable.prototype',
  'rxjs/operator/zip': 'Rx.Observable.prototype',
  'rxjs/operator/zipAll': 'Rx.Observable.prototype',

  'brace': 'Brace',
  'brace/mode/text': 'Brace.mode',
  'brace/theme/github': 'Brace.theme'
};

const external = Object.keys(globals);

export default {
  external: external,
  input: `${pkg.module}`,
  output: {
    file: `${pkg.main}`,
    format: 'umd',
    name: `zef.${name}`,
    globals: globals,
    sourcemap: true,
    exports: 'named'
  },
  plugins: [
    resolve(),
    sourcemaps()
  ]
}
