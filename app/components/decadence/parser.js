import Component from '@glimmer/component';

const componentMap = {
  'h1': 'decadence/head',
  'p': 'decadence/paragraph',
  'img': 'decadence/image'
};

function itemFactory(element) {
  const tag = element.tagName?.toLowerCase();
  const component = componentMap[tag];

  if (component) {
    return {
      component,
      data: tag == 'img' ? imageData(element) : textData(element),
    };
  } else if (element.wholeText) {
    if (element.wholeText.trim()) {
      return {
        component: 'decadence/text',
        data: element.wholeText,
      };
    }
  } else {
    return {
      component: 'decadence/text',
      data: 'unknown tag',
    }
  }
}

function textData(element) { return element.innerHTML; }
function imageData(element) {
  return {
    src: element.getAttribute('src'),
    alt: element.getAttribute('alt'),
  };
}

export default class DecadenceParserComponent extends Component {
  get data() {
    const { html } = this.args;
    const container = document.createElement('div');
    container.innerHTML = html;

    return Array.from(container.childNodes).map(itemFactory).filter(item => item);
  }
}
