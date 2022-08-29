export const steps = (i18n) => [
  {
    element: '#guide',
    popover: {
      title: i18n('driver.guideBtn'),
      description: '引导使用',
      position: 'left'
    }
  },
  {
    element: '#hamburger',
    popover: {
      title: i18n('driver.hamburgerBtn'),
      description: '收起菜单栏',
      position: 'bottom'
    }
  },
  {
    element: '#lang',
    popover: {
      title: i18n('driver.langBtn'),
      description: 'Body of the popover',
      position: 'left'
    }
  }
]
