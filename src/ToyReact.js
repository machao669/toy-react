/*
 * @Author: machao
 * @Date: 2020-10-22 20:58:45
 * @LastEditTime: 2020-10-22 22:49:41
 * @Description: 
 * @symbol_custom_string_obkoro1: Copyright raycloud
 */
export default class React {

}

React.createElement = createElement;

function createElement(type, attributes, ...childs) {
  let node;
  if (typeof type === 'string') {
    node = new ElementWrapper(type);
  } else {
    node = new type();
  }

  if (attributes) {
    Object.keys(attributes).forEach(key => {
      node.setAttribute(key, attributes[key]);
    })
  }

  const insertChild = (children) => {
    if (children) {
      children.forEach(child => {
        if (typeof child === 'string') {
          child = (new TextWrapper(child));
        }
        if (Array.isArray(child)) {
          insertChild(child);
        } else {
          node.appendChild(child);
        }      
      })
    }
  }
  insertChild(childs);
  return node;
}

class ElementWrapper {
  constructor(tag) {
    this.root = document.createElement(tag);
  }

  setAttribute(name, value) {
    this.root.setAttribute(name, value);
  }

  appendChild(component) {
    this.root.appendChild(component.root);
  }
}

class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content);
  }
}

export class Component {
  constructor() {
    this.props = Object.create(null);
    this.children = [];
    this._root = null;
  }

  setAttribute(name, value) {
    this.props[name] = value;
  }

  appendChild(component) {
    this.children.push(component);
  }

  get root() {
    if (!this._root) {
      this._root = this.render().root;
    }
    return this._root;
  }
}

React.render = (component, element) => {
  element.appendChild(component.root);
}
