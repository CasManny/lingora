import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface UserProfileProps {
  userImage: string;
  userName: string;
  userEmail: string;
}

export const UserProfile = ({
  userImage,
  userEmail,
  userName,
}: UserProfileProps) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="space-y-0.5">
        <p className="text-sm">{userName}</p>
        <p className="text-xs">{userEmail}</p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="cursor-pointer">
          <Avatar>
            <AvatarImage
              src={userImage || "https://github.com/shadcn.png"}
              alt="User"
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
