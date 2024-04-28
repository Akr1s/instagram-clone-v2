import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useUserContext } from '../contexts/user/use-user-context.hook';
import { getUserFullName } from '../utils/get-user-full-name.util';
import Typography from '@mui/material/Typography';

export default function Profile() {
    const { user } = useUserContext();

    return (
        <Stack sx={{ pl: 4, pt: 4 }} direction="column">
            <Stack direction="column" alignItems="center">
                <Avatar alt={getUserFullName(user)} src="" sx={{ width: 60, height: 60, mb: 1 }} />
                <Typography sx={{ color: 'text.primary', fontWeight: 500 }}>
                    {getUserFullName(user)}
                </Typography>
                <Typography sx={{ fontSize: '14px', color: 'text.secondary' }}>
                    @{user.username}
                </Typography>
            </Stack>
            <Stack direction="row" gap={1} justifyContent="space-between" mt={4}>
                <Stack direction="column" alignItems="center">
                    <Typography>471</Typography>
                    <Typography>Posts</Typography>
                </Stack>
                <Stack direction="column" alignItems="center">
                    <Typography>471</Typography>
                    <Typography>Followers</Typography>
                </Stack>
                <Stack direction="column" alignItems="center">
                    <Typography>471</Typography>
                    <Typography>Following</Typography>
                </Stack>
            </Stack>
        </Stack>
    );
}
