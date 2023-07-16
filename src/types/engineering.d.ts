namespace engineering {
  enum RouteIdEnum {
    MODULARIZATION_HISTORY = "modularization-history",
    TEMPLATE_CLI = "template-cli",
    MODULARIZATION= "modularization",
    COMPONENTIZATION = "componentization",
    WEB_DEV_STANDARD = "web-dev-standard",
  }
  const ComponentsMap: {[key in RouteIdEnum]: React.FC};
}


