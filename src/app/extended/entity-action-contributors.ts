import {
  eIdentityComponents,
  IdentityEntityActionContributors,
  IdentityUserDto,
} from '@abp/ng.identity';
import { EntityAction, EntityActionList } from '@abp/ng.theme.shared/extensions';
import { SetPassowrdComponent } from './action/set-password/set-passowrd.component';
import { UserViewComponent } from './action/user-view/user-view.component';

const alertUserName = new EntityAction<IdentityUserDto>({
  text: 'Click Me!',
  action: data => {
    // Replace alert with your custom code
    alert(data.record.userName);
  },
  // See EntityActionOptions in API section for all options
});

const setPasswordAction = new EntityAction<IdentityUserDto>({
  text: 'Set Password',
  action: data => {
    const component = data.getInjected(SetPassowrdComponent);
    component.setPassword(data.record);
  },
});

const quickViewAction = new EntityAction<IdentityUserDto>({
  text: 'Quick View',
  action: data => {
    const component = data.getInjected(UserViewComponent);
    component.openUserQuickView(data.record);
  },
});

export function customModalContributor(actionList: EntityActionList<IdentityUserDto>) {
  actionList.addByIndex(setPasswordAction, 2);
  // actionList.addByIndex(quickViewAction, 3);
  // actionList.addTail(alertUserName);
}

export const identityEntityActionContributors: IdentityEntityActionContributors = {
  // enum indicates the page to add contributors to
  [eIdentityComponents.Users]: [
    customModalContributor,
    // You can add more contributors here
  ],
};
