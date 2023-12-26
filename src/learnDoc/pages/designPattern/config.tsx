import { getMenuItem } from '../../util/config';
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
import ObserverPattern from './CommonPatterns/ObserverPattern';
import InterpreterPattern from './UncommonPatterns/InterpreterPattern';
import MediatorPattern from './UncommonPatterns/MediatorPattern';
import VisitorPattern from './UncommonPatterns/VisitorPattern';
import MemePattern from './UncommonPatterns/MemePattern';
import TemplateMethodPattern from './UncommonPatterns/TemplateMethodPattern';
import StrategyPattern from './UncommonPatterns/StrategyPattern';
import CommandPattern from './UncommonPatterns/CommandPattern';
import ActionPattern from './UncommonPatterns/ActionPattern';
import FlyweightPattern from './UncommonPatterns/FlyweightPattern';
import Combination from './UncommonPatterns/Combination';
import BridgePattern from './UncommonPatterns/BridgePattern';
import PrototypePattern from './UncommonPatterns/PrototypePattern';
import DecoratorPattern from './CommonPatterns/DecoratorPattern';
import AdapteePattern from './CommonPatterns/AdapteePattern';
import FactoryPattern from './CommonPatterns/FactoryPattern';
import SinglePattern from './CommonPatterns/SinglePattern';
import ProxyPattern from './CommonPatterns/ProxyPattern';
import FacadePattern from './CommonPatterns/FacadePattern';
import IteratorPattern from './CommonPatterns/IteratorPattern';

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

export const componentsMap: { [key in designPattern.RouteIdEnumParent]?: React.ReactNode } = {
  [LAW_OF_DEMETER]: <LawOfDemeter />,
  [DESIGN_RULE]: <DesignRule />,
  [COMMON_PATTERNS]: <CommonPatterns />,
  [UNCOMMON_PATTERNS]: <UncommonPatterns />,
};
export const componentsMap2: { [key in designPattern.RouteIdEnum]?: React.ReactNode } = {
  [OBSERVER_PATTERN]: <ObserverPattern />,
  [DECORATOR_PATTERN]: <DecoratorPattern />,
  [ADAPTEE_PATTERN]: <AdapteePattern />,
  [FACTORY_PATTERN]: <FactoryPattern />,
  [SINGLE_PATTERN]: <SinglePattern />,
  [PROXY_PATTERN]: <ProxyPattern />,
  [FACADE_PATTERN]: <FacadePattern />,
  [ITERATOR_PATTERN]: <IteratorPattern />,

  [INTERPRETER_PATTERN]: <InterpreterPattern />,
  [MEDIATOR_PATTERN]: <MediatorPattern />,
  [VISITOR_PATTERN]: <VisitorPattern />,
  [MEME_PATTERN]: <MemePattern />,
  [COMMAND_PATTERN]: <CommandPattern />,
  [ACTION_PATTERN]: <ActionPattern />,
  [TEMPLATE_METHOD_PATTERN]: <TemplateMethodPattern />,
  [STRATEGY_PATTERN]: <StrategyPattern />,
  [FLYWEIGHT_PATTERN]: <FlyweightPattern />,
  [COMBINATION]: <Combination />,
  [BRIDGE_PATTERN]: <BridgePattern />,
  [PROTOTYPE_PATTERN]: <PrototypePattern />,
};

