import { ReactComponent as KanbanLogoIcon } from '../../assets/KanbanLogoIcon.svg';
import { ReactComponent as KanbanLogoText } from '../../assets/KanbanLogoText.svg';

export const KanbanLogo = () => (
  <div className="text-kb-black dark:text-white flex gap-4">
    <KanbanLogoIcon />
    <KanbanLogoText />
  </div>
);
