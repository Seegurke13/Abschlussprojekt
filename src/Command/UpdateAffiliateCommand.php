<?php
declare(strict_types=1);


namespace App\Command;


use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class UpdateAffiliateCommand extends Command
{
    protected static $defaultName = 'app:update-affiliate';

    protected function execute(InputInterface $input, OutputInterface $output)
    {
    }
}