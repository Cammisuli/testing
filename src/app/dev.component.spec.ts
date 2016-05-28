import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { DevAppComponent } from '../app/dev.component';

beforeEachProviders(() => [DevAppComponent]);

describe('App: Dev', () => {
  it('should create the app',
      inject([DevAppComponent], (app: DevAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'dev works!\'',
      inject([DevAppComponent], (app: DevAppComponent) => {
    expect(app.title).toEqual('dev works!');
  }));
});
