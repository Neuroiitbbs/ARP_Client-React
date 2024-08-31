import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import cloudUploadFill from '@iconify/icons-eva/cloud-upload-fill';
import baselineRateReview from '@iconify/icons-ic/baseline-rate-review';
import bxsFlag from '@iconify/icons-bx/bxs-flag';
import plusCircleFilled from '@iconify/icons-ant-design/plus-circle-filled';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: getIcon(pieChart2Fill),
    role: ['user', 'admin', 'superAdmin']
  },
  {
    title: 'upload',
    path: '/upload',
    icon: getIcon(cloudUploadFill),
    role: ['user', 'admin', 'superAdmin']
  },
  {
    title: 'manage admin',
    path: '/admin/manage',
    icon: getIcon(peopleFill),
    role: ['superAdmin']
  },
  {
    title: 'review resources',
    path: '/admin/unreviewed',
    icon: getIcon(baselineRateReview),
    role: ['admin', 'superAdmin']
  },
  {
    title: 'review flags',
    path: '/admin/flagged',
    icon: getIcon(bxsFlag),
    role: ['admin', 'superAdmin']
  }
];

export default sidebarConfig;
