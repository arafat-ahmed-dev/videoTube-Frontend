import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function AvatarImage({
    src,
    alt,
    size = 40, // Default size is 48
}) {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar
                alt={alt || "Remy Sharp"}
                src={src || '/static/images/avatar/1.jpg'}
                sx={{ width: size, height: size }} // Corrected dynamic size handling
            />
        </Stack>
    );
}
