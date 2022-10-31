/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog } from 'quasar';
import { Component } from 'vue';
import { i18n } from 'boot/i18n';

export function openDialog(config: {
  customComponent: Component;
  componentProps?: any;
  onOkCallback?: () => any;
  onCancelCallback?: () => any;
  onDismissCallback?: () => any;
}) {
  Dialog.create({
    component: config.customComponent,
    componentProps: config.componentProps,
  })
    .onOk(() => {
      config.onOkCallback &&
        typeof config.onOkCallback === 'function' &&
        config.onOkCallback();
    })
    .onCancel(() => {
      config.onCancelCallback &&
        typeof config.onCancelCallback === 'function' &&
        config.onCancelCallback();
    })
    .onDismiss(() => {
      config.onDismissCallback &&
        typeof config.onDismissCallback === 'function' &&
        config.onDismissCallback();
    });
}

export function openConfirmDialog(config: {
  title?: string;
  message?: string;
  hasCancelButton?: boolean;
  dismissible?: boolean;
  onOkCallback?: () => any;
  onCancelCallback?: () => any;
  onDismissCallback?: () => any;
}) {
  Dialog.create({
    title: config.title ?? '',
    message: config.message ?? '',
    persistent: !config.dismissible,
    ok: {
      outline: true,
      label: i18n.global.t('common.ok'),
    },
    cancel: {
      outline: true,
      label: i18n.global.t('common.cancel'),
    },
  })
    .onOk(() => {
      config.onOkCallback &&
        typeof config.onOkCallback === 'function' &&
        config.onOkCallback();
    })
    .onCancel(() => {
      config.onCancelCallback &&
        typeof config.onCancelCallback === 'function' &&
        config.onCancelCallback();
    })
    .onDismiss(() => {
      config.onDismissCallback &&
        typeof config.onDismissCallback === 'function' &&
        config.onDismissCallback();
    });
}
