import { h } from '../core/jsx';

export function Button(label: string, onClick: () => void) {
    return h('button', { onclick: onClick, class: 'btn' }, label);
}
