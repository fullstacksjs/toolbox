type PackageJson = Record<Dependencies, any>;
type Dependencies = 'peerDependencies' | 'devDependencies' | 'dependencies' | 'optionalDependencies';

const hasDepType = (packageJson: PackageJson) => (type: Dependencies) => (dep: string) =>
  typeof packageJson[type] === 'object' && Reflect.has(packageJson[type], dep);

export const hasPeerDep = (packageJson: PackageJson) => hasDepType(packageJson)('peerDependencies');
export const hasDep = (packageJson: PackageJson) => hasDepType(packageJson)('dependencies');
export const hasDevDep = (packageJson: PackageJson) => hasDepType(packageJson)('devDependencies');
export const hasOptDep = (packageJson: PackageJson) => hasDepType(packageJson)('optionalDependencies');

export const hasAnyDep = (packageJson: PackageJson) => (dep: string) =>
  [hasDep, hasDevDep, hasPeerDep, hasOptDep].some(isDepExist => isDepExist(packageJson)(dep));

export const ifAnyDep = (packageJson: PackageJson) => (dep: string, t?: Function, f?: Function) =>
  hasAnyDep(packageJson)(dep) ? t?.() : f?.();

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Packages = (packageJson: PackageJson) => ({
  hasOptDep: hasOptDep(packageJson),
  hasPeerDep: hasPeerDep(packageJson),
  hasDevDep: hasDevDep(packageJson),
  hasDep: hasDep(packageJson),
  hasAnyDep: hasAnyDep(packageJson),
  ifAnyDep: ifAnyDep(packageJson),
});
