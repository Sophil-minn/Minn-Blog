import { getMenuItem } from '../../util/config';
import { MenuItem } from '../react/apiPractice/types';
import UncommonPatterns from './UncommonPatterns';
import DesignRule from './DesignRule';
import CommonPatterns from './CommonPatterns';
import LawOfDemeter from './LawOfDemeter';
import {
  LAW_OF_DEMETER, DESIGN_RULE, COMMON_PATTERNS, UNCOMMON_PATTERNS,
  OBSERVER_PATTERN, DECORATOR_PATTERN, ADAPTEE_PATTERN, FACTORY_PATTERN, SINGLE_PATTERN, PROXY_PATTERN, FACADE_PATTERN, ITERATOR_PATTERN,
  INTERPRETER_PATTERN, MEDIATOR_PATTERN, VISITOR_PATTERN, MEME_PATTERN, COMMAND_PATTERN,
  ACTION_PATTERN, TEMPLATE_METHOD_PATTERN, STRATEGY_PATTERN, FLYWEIGHT_PATTERN, COMBINATION, BRIDGE_PATTERN, PROTOTYPE_PATTERN
} from './const';

export const rootSubmenuKeys = [''];

export const items: MenuItem[] = [
  getMenuItem('迪米特法则', `/designPattern/${LAW_OF_DEMETER}`, LAW_OF_DEMETER),
  getMenuItem('设计原则', `/designPattern/${DESIGN_RULE}`, DESIGN_RULE),
  getMenuItem('常用设计模式', `/designPattern/${COMMON_PATTERNS}`, COMMON_PATTERNS, [
    getMenuItem('观察者模式', `/designPattern/${COMMON_PATTERNS}/${OBSERVER_PATTERN}`, OBSERVER_PATTERN),
    getMenuItem('装饰器模式', `/designPattern/${COMMON_PATTERNS}/${DECORATOR_PATTERN}`, DECORATOR_PATTERN),
    getMenuItem('适配器模式', `/designPattern/${COMMON_PATTERNS}/${ADAPTEE_PATTERN}`, ADAPTEE_PATTERN),
    getMenuItem('工厂模式', `/designPattern/${COMMON_PATTERNS}/${FACTORY_PATTERN}`, FACTORY_PATTERN),
    getMenuItem('单例模式', `/designPattern/${COMMON_PATTERNS}/${SINGLE_PATTERN}`, SINGLE_PATTERN),
    getMenuItem('代理模式', `/designPattern/${COMMON_PATTERNS}/${PROXY_PATTERN}`, PROXY_PATTERN),
    getMenuItem('外观模式', `/designPattern/${COMMON_PATTERNS}/${FACADE_PATTERN}`, FACADE_PATTERN),
    getMenuItem('迭代模式', `/designPattern/${COMMON_PATTERNS}/${ITERATOR_PATTERN}`, ITERATOR_PATTERN),
  ]),
  getMenuItem('非常用设计模式', `/designPattern/${UNCOMMON_PATTERNS}`, UNCOMMON_PATTERNS, [
    getMenuItem('解释器模式', `/designPattern/${UNCOMMON_PATTERNS}/${INTERPRETER_PATTERN}`, INTERPRETER_PATTERN),
    getMenuItem('中介者模式', `/designPattern/${UNCOMMON_PATTERNS}/${MEDIATOR_PATTERN}`, MEDIATOR_PATTERN),
    getMenuItem('访问者模式', `/designPattern/${UNCOMMON_PATTERNS}/${VISITOR_PATTERN}`, VISITOR_PATTERN),
    getMenuItem('备忘录模式', `/designPattern/${UNCOMMON_PATTERNS}/${MEME_PATTERN}`, MEME_PATTERN),
    getMenuItem('命令模式', `/designPattern/${UNCOMMON_PATTERNS}/${COMMAND_PATTERN}`, COMMAND_PATTERN),
    getMenuItem('职责连模式', `/designPattern/${UNCOMMON_PATTERNS}/${ACTION_PATTERN}`, ACTION_PATTERN),
    getMenuItem('模板方法模式', `/designPattern/${UNCOMMON_PATTERNS}/${TEMPLATE_METHOD_PATTERN}`, TEMPLATE_METHOD_PATTERN),
    getMenuItem('策略模式', `/designPattern/${UNCOMMON_PATTERNS}/${STRATEGY_PATTERN}`, STRATEGY_PATTERN),
    getMenuItem('享元模式', `/designPattern/${UNCOMMON_PATTERNS}/${FLYWEIGHT_PATTERN}`, FLYWEIGHT_PATTERN),
    getMenuItem('组合模式', `/designPattern/${UNCOMMON_PATTERNS}/${COMBINATION}`, COMBINATION),
    getMenuItem('桥接模式', `/designPattern/${UNCOMMON_PATTERNS}/${BRIDGE_PATTERN}`, BRIDGE_PATTERN),
    getMenuItem('原型模式', `/designPattern/${UNCOMMON_PATTERNS}/${PROTOTYPE_PATTERN}`, PROTOTYPE_PATTERN),
  ]),
];

interface ComponentsMap {
  [LAW_OF_DEMETER]: React.FC;
  [DESIGN_RULE]: React.FC;
  [COMMON_PATTERNS]: React.FC;
  [UNCOMMON_PATTERNS]: React.FC;
}

interface ComponentsMap2 {
  [OBSERVER_PATTERN]: React.FC;
  [DECORATOR_PATTERN]: React.FC;
  [ADAPTEE_PATTERN]: React.FC;
  [FACTORY_PATTERN]: React.FC;
  [SINGLE_PATTERN]: React.FC;
  [PROXY_PATTERN]: React.FC;
  [FACADE_PATTERN]: React.FC;
  [ITERATOR_PATTERN]: React.FC;

  [INTERPRETER_PATTERN]: React.FC;
  [MEDIATOR_PATTERN]: React.FC;
  [VISITOR_PATTERN]: React.FC;
  [MEME_PATTERN]: React.FC;
  [COMMAND_PATTERN]: React.FC;
  [ACTION_PATTERN]: React.FC;
  [TEMPLATE_METHOD_PATTERN]: React.FC;
  [STRATEGY_PATTERN]: React.FC;
  [FLYWEIGHT_PATTERN]: React.FC;
  [COMBINATION]: React.FC;
  [BRIDGE_PATTERN]: React.FC;
  [PROTOTYPE_PATTERN]: React.FC;
}

export const componentsMap: ComponentsMap = {
  [LAW_OF_DEMETER]: () => <UncommonPatterns />,
  [DESIGN_RULE]: () => <DesignRule />,
  [COMMON_PATTERNS]: () => <CommonPatterns />,
  [UNCOMMON_PATTERNS]: () => <LawOfDemeter />,
};
export const componentsMap2: ComponentsMap2 = {
  [OBSERVER_PATTERN]: () => <UncommonPatterns />,
  [DECORATOR_PATTERN]: () => <UncommonPatterns />,
  [ADAPTEE_PATTERN]: () => <UncommonPatterns />,
  [FACTORY_PATTERN]: () => <UncommonPatterns />,
  [SINGLE_PATTERN]: () => <UncommonPatterns />,
  [PROXY_PATTERN]: () => <UncommonPatterns />,
  [FACADE_PATTERN]: () => <UncommonPatterns />,
  [ITERATOR_PATTERN]: () => <UncommonPatterns />,

  [INTERPRETER_PATTERN]: () => <UncommonPatterns />,
  [MEDIATOR_PATTERN]: () => <UncommonPatterns />,
  [VISITOR_PATTERN]: () => <UncommonPatterns />,
  [MEME_PATTERN]: () => <UncommonPatterns />,
  [COMMAND_PATTERN]: () => <UncommonPatterns />,
  [ACTION_PATTERN]: () => <UncommonPatterns />,
  [TEMPLATE_METHOD_PATTERN]: () => <UncommonPatterns />,
  [STRATEGY_PATTERN]: () => <UncommonPatterns />,
  [FLYWEIGHT_PATTERN]: () => <UncommonPatterns />,
  [COMBINATION]: () => <UncommonPatterns />,
  [BRIDGE_PATTERN]: () => <UncommonPatterns />,
  [PROTOTYPE_PATTERN]: () => <UncommonPatterns />,
};

