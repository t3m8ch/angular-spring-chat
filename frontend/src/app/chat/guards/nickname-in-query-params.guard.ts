import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivateType } from '../../utils/can-activate-type';

@Injectable()
export class NicknameInQueryParamsGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): CanActivateType {
    if (!route.queryParams['nickname']) {
      return this.router.parseUrl('/login');
    } else {
      return true;
    }
  }
}
