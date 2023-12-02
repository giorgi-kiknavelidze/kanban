import { BoardRoot, HeaderRoot, SidebarRoot } from '../components';

export default async function Index() {
  return (
    <div className="flex min-h-screen">
      <SidebarRoot />
      <div className="flex flex-col grow overflow-x-auto">
        <HeaderRoot />
        <BoardRoot />
      </div>
    </div>
  );
}
