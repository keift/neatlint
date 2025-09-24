import { javascript_rules, typescript_rules } from '../src/defaults/NeatlintOptions.default';

const ignored_rules = ['@typescript-eslint/consistent-type-definitions'];

const config_rules_keys = Object.keys({ ...(javascript_rules.configs as object), ...(typescript_rules.configs as object) });
const custom_rules_keys = Object.keys({ ...(javascript_rules.custom as object), ...(typescript_rules.custom as object) });

const common_rules = config_rules_keys.filter((rule) => custom_rules_keys.includes(rule) && !ignored_rules.includes(rule));

if (common_rules.length !== 0) throw Error(`Duplicate rules found: ${common_rules.join(', ')}`);
