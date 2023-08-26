<?php

declare(strict_types=1);

namespace App\Application\Actions\Hotels;

use Psr\Http\Message\ResponseInterface as Response;

class ListHotels extends HotelAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $this->logger->info("Hotel List view requested");
        $jsonContents = $this->filesystem->read('testResponses/list.json');
        $jsonData = json_decode($jsonContents, true);
        $hotels = $jsonData['data'];
        $this->logger->info("Hotel List view response generated");

        return $this->respondWithData($hotels);
    }
}
